const todoList = () => {
  let all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    return all.filter(
      (item) => item.dueDate < new Date().toLocaleDateString("en-CA")
    );
  };

  const dueToday = () => {
    return all.filter(
      (item) => item.dueDate === new Date().toLocaleDateString("en-CA")
    );
  };

  const dueLater = () => {
    return all.filter(
      (item) => item.dueDate > new Date().toLocaleDateString("en-CA")
    );
  };

  const toDisplayableList = (list) => {
    let ans = [],
      index;
    for (index = 0; index < list.length; index++) {
      let box = list[index].completed === true ? "[x]" : "[ ]";
      let adddate =
        list[index].dueDate === new Date().toLocaleDateString("en-CA")
          ? ""
          : list[index].dueDate;
      ans.push(`${box} ${list[index].title} ${adddate}`);
    }
    let res = ans.join("\n");
    ans = res.trim();
    return ans;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
  };
};

module.exports = todoList;
