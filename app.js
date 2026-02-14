// ===== PART 1: RECIPE DATA =====
const recipes = [
    {
        id: 1,
        title: "Classic Spaghetti Carbonara",
        time: 25,
        difficulty: "easy",
        description: "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
        category: "pasta"
    },
    {
        id: 2,
        title: "Chicken Tikka Masala",
        time: 45,
        difficulty: "medium",
        description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
        category: "curry"
    },
    {
        id: 3,
        title: "Homemade Croissants",
        time: 180,
        difficulty: "hard",
        description: "Buttery, flaky French pastries that require patience but deliver amazing results.",
        category: "baking"
    },
    {
        id: 4,
        title: "Greek Salad",
        time: 15,
        difficulty: "easy",
        description: "Fresh vegetables, feta cheese, and olives tossed in olive oil and herbs.",
        category: "salad"
    },
    {
        id: 5,
        title: "Beef Wellington",
        time: 120,
        difficulty: "hard",
        description: "Tender beef fillet coated with mushroom duxelles and wrapped in puff pastry.",
        category: "meat"
    },
    {
        id: 6,
        title: "Vegetable Stir Fry",
        time: 20,
        difficulty: "easy",
        description: "Colorful mixed vegetables cooked quickly in a savory sauce.",
        category: "vegetarian"
    },
    {
        id: 7,
        title: "Pad Thai",
        time: 30,
        difficulty: "medium",
        description: "Thai stir-fried rice noodles with shrimp, peanuts, and tangy tamarind sauce.",
        category: "noodles"
    },
    {
        id: 8,
        title: "Margherita Pizza",
        time: 60,
        difficulty: "medium",
        description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
        category: "pizza"
    }
];

// ===== PART 1: DOM SELECTION =====
const recipeContainer = document.querySelector('#recipe-container');

// ===== PART 2: STATE MANAGEMENT =====
let currentFilter = 'all';
let currentSort = 'none';

// ===== PART 2: BUTTON REFERENCES =====
const filterButtons = document.querySelectorAll('.filter-btn');
const sortButtons = document.querySelectorAll('.sort-btn');

// ===== PART 1: CREATE RECIPE CARD =====
const createRecipeCard = (recipe) => {
    return `
        <div class="recipe-card" data-id="${recipe.id}">
            <h3>${recipe.title}</h3>
            <div class="recipe-meta">
                <span>⏱️ ${recipe.time} min</span>
                <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
            </div>
            <p>${recipe.description}</p>
        </div>
    `;
};

// ===== PART 1: RENDER FUNCTION =====
const renderRecipes = (recipesToRender) => {
    const recipeCardsHTML = recipesToRender
        .map(createRecipeCard)
        .join('');
    recipeContainer.innerHTML = recipeCardsHTML;
};

// ===== PART 2: PURE FILTER FUNCTIONS =====
const filterByDifficulty = (recipes, difficulty) => {
    return recipes.filter(recipe => recipe.difficulty === difficulty);
};

const filterQuickRecipes = (recipes) => {
    return recipes.filter(recipe => recipe.time < 30);
};

const applyFilter = (recipes, filterType) => {
    switch(filterType) {
        case 'easy':
            return filterByDifficulty(recipes, 'easy');
        case 'medium':
            return filterByDifficulty(recipes, 'medium');
        case 'hard':
            return filterByDifficulty(recipes, 'hard');
        case 'quick':
            return filterQuickRecipes(recipes);
        case 'all':
        default:
            return [...recipes];
    }
};

// ===== PART 2: PURE SORT FUNCTIONS =====
const sortByName = (recipes) => {
    return [...recipes].sort((a, b) => a.title.localeCompare(b.title));
};

const sortByTime = (recipes) => {
    return [...recipes].sort((a, b) => a.time - b.time);
};

const applySort = (recipes, sortType) => {
    switch(sortType) {
        case 'name':
            return sortByName(recipes);
        case 'time':
            return sortByTime(recipes);
        case 'none':
        default:
            return [...recipes];
    }
};

// ===== PART 2: UI UPDATE FUNCTIONS =====
const updateActiveFilterButton = (filterType) => {
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filterType) {
            btn.classList.add('active');
        }
    });
};

const updateActiveSortButton = (sortType) => {
    sortButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.sort === sortType) {
            btn.classList.add('active');
        }
    });
};

// ===== PART 2: MAIN UPDATE FUNCTION =====
const updateDisplay = () => {
    let recipesToDisplay = [...recipes];
    
    recipesToDisplay = applyFilter(recipesToDisplay, currentFilter);
    recipesToDisplay = applySort(recipesToDisplay, currentSort);
    
    updateActiveFilterButton(currentFilter);
    updateActiveSortButton(currentSort);
    
    renderRecipes(recipesToDisplay);
    
    console.log(`Displaying ${recipesToDisplay.length} recipes (Filter: ${currentFilter}, Sort: ${currentSort})`);
};

// ===== PART 2: EVENT HANDLERS =====
const handleFilterClick = (event) => {
    const filterType = event.target.dataset.filter;
    if (!filterType) return;
    
    currentFilter = filterType;
    updateDisplay();
};

const handleSortClick = (event) => {
    const sortType = event.target.dataset.sort;
    if (!sortType) return;
    
    currentSort = sortType;
    updateDisplay();
};

// ===== PART 2: SETUP EVENT LISTENERS =====
const setupEventListeners = () => {
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilterClick);
    });
    
    sortButtons.forEach(btn => {
        btn.addEventListener('click', handleSortClick);
    });
    
    console.log('Event listeners attached');
};

// ===== INITIALIZE THE APP =====
updateDisplay();
setupEventListeners();