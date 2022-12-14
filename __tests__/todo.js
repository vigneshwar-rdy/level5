/* eslint-disable no-undef */
const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("TodoLIst Test Suite ", () => {
  beforeAll(() => {
    add({
      title: "Service Vehicle",
      dueDate: new Date().toLocaleDateString("en-CA"),
      completed: false,
    });
  });

  test("Should add new todo", () => {
    const len = all.length;
    add({
      title: "Test",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(len + 1);
  });

  test("Should mark as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Should retrieve overdue items", () => {
    let overdueItems = overdue();
    const len = overdueItems.length;
    add({
      title: "Overdue test",
      completed: false,
      dueDate: new Date(new Date().setDate(new Date().getDate() - 10))
        .toLocaleDateString("en-CA"),
    });
    overdueItems = overdue();
    expect(overdueItems.length).toBe(len + 1);
  });

  test("Should retrieve due today items", () => {
    let dueTodayItems = dueToday();
    const len = dueTodayItems.length;
    add({
      title: "dueToday test",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    dueTodayItems = dueToday();
    expect(dueTodayItems.length).toBe(len + 1);
  });

  test("Should retrieve due Later items", () => {
    let dueLaterItems = dueLater();
    const len = dueLaterItems.length;
    add({
      title: "dueLater test",
      completed: false,
      dueDate: new Date(new Date().setDate(new Date().getDate() + 10))
        .toLocaleDateString("en-CA"),
    });
    dueLaterItems = dueLater();
    expect(dueLaterItems.length).toBe(len + 1);
  });
});
