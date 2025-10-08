import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getTodos = query({
  handler: async (ctx) => {
    const todos = await ctx.db.query("todos").order("desc").collect();
    return todos;
  },
});

export const addTodo = mutation({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    const newTodo = await ctx.db.insert("todos", {
      text: args.text,
      isCompleted: false,
    });
    return newTodo;
  },
});

export const toggleTodo = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    const todo = await ctx.db.get(args.id);
    if (!todo) {
      throw new ConvexError("Todo not found");
    }
    const updatedTodo = await ctx.db.patch(todo._id, {
      isCompleted: !todo.isCompleted,
    });
    return updatedTodo;
  },
});

export const deleteTodo = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    const todo = await ctx.db.get(args.id);
    if (!todo) {
      throw new ConvexError("Todo not found");
    }
    await ctx.db.delete(args.id);
  },
});

export const updateTodo = mutation({
  args: { 
    id: v.id("todos"), text: v.string()
  },
  handler: async (ctx, args) => {
    const todo = await ctx.db.get(args.id);
    if (!todo) {
      throw new ConvexError("Todo not found");
    }
    const updatedTodo = await ctx.db.patch(todo._id, {
      text: args.text,
    });
    return updatedTodo;
  },
});

export const clearAllTodos = mutation({
  handler: async (ctx) => {
    const allTodos = await ctx.db.query("todos").collect();
    for (const todo of allTodos) {
      await ctx.db.delete(todo._id);
    }
    return { deletedCount: allTodos.length };
  },
});