// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const clearAllButton = document.getElementById('clearAllButton');
const taskList = document.getElementById('taskList');

// Function to create a new task element
function createTaskElement(taskText) {
    // Create task list item
    const li = document.createElement('li');
    
    // Create text node for the task
    const textNode = document.createTextNode(taskText);
    
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    deleteButton.onclick = () => {
        li.remove();
    };
    
    // Append text and button to the list item
    li.appendChild(textNode);
    li.appendChild(deleteButton);
    
    // Toggle completion on click
    li.onclick = () => {
        li.classList.toggle('completed');
    };

    return li;
}

// Add task functionality
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskElement = createTaskElement(taskText);
        taskList.appendChild(taskElement);
        taskInput.value = ''; // Clear input field
    } else {
        alert('Please enter a task');
    }
}

// Clear all tasks functionality
function clearAllTasks() {
    taskList.innerHTML = '';
}

// Event listeners
addTaskButton.addEventListener('click', addTask);
clearAllButton.addEventListener('click', clearAllTasks);

// Allow Enter key to add task
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});