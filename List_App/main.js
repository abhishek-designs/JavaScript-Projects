// Running operation when page gets loaded
if(document.readyState == 'loading')
{
    document.addEventListener('DOMContentLoaded',loaded);
}
else
{
    loaded();
}

function loaded()
{
    // Selecting delete buttons
    var deleteBtn = document.querySelectorAll('.btn');
    
    for(let i=0; i<deleteBtn.length; i++)
    {
        var btn = deleteBtn[i];
        btn.addEventListener('click',removeList);
    }
    
    // Selecting Add Button
    var addBtn = document.querySelector('.btn-add');
    addBtn.addEventListener('click',addList);

    updateList();
}

// Removing List
function removeList(btn)
{
    var deleteBtn = btn.target;
    deleteBtn.parentElement.remove();
    updateList();
}

// Adding List
function addList(btn)
{
    
    var listItem = document.querySelector('.list-item');
    var listRow = listItem.querySelectorAll('.list-row');
    
    
    var num = listRow.length;
    num += 1;
    
    
    var row = document.createElement('div');
    var rowContent = '<h2 class="num-head">1</h2><h2 class="head">List 1</h2><a href="#" class="btn">Delete</a>';
    row.innerHTML = rowContent;
    row.classList.add('list-row');
    listItem.append(row);
    updateList();
    
    
    
    // Selecting delete buttons
    var deleteBtn = document.querySelectorAll('.btn');
    
    for(let i=0; i<deleteBtn.length; i++)
    {
        var btn = deleteBtn[i];
        btn.addEventListener('click',removeList);
    }
    
    
    // Update List
    // updateList();
    
}

// Update List
function updateList()
{
    var items = document.querySelector('.list-item');
    var rows = items.querySelectorAll('.list-row');
    var totalTab = document.querySelector('.total-tab');
    var totalDisplay = totalTab.querySelector('.total');
    var total = 0;

    for(let i=0; i<rows.length; i++)
    {
        var row = rows[i];
        var itemNum = row.querySelector('.num-head');
        var num = parseInt(itemNum.innerText);
        total += num;
        
    }
    totalDisplay.innerHTML = '<p>'+total+'</p>';
}