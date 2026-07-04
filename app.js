// ===== PART 3: IIFE - ENCAPSULATE ALL CODE =====
(function() {
    // ---------- RECIPE DATA (with nested steps) ----------
    const recipes = [
        {
            id: 1,
            title: "Classic Spaghetti Carbonara",
            time: 25,
            difficulty: "easy",
            description: "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
            category: "pasta",
            ingredients: [
                "200g spaghetti",
                "100g pancetta",
                "2 large eggs",
                "50g Parmesan cheese",
                "2 cloves garlic",
                "Salt and black pepper"
            ],
            steps: [
                "Boil spaghetti in salted water according to package instructions.",
                "While pasta cooks, fry pancetta in a pan until crispy.",
                "In a bowl, whisk eggs with grated Parmesan and plenty of black pepper.",
                "Drain pasta, reserving some cooking water.",
                "Quickly toss hot pasta with pancetta, then remove from heat.",
                "Stir in egg mixture, adding a splash of pasta water to create a creamy sauce.",
                "Serve immediately with extra Parmesan."
            ]
        },
        {
            id: 2,
            title: "Chicken Tikka Masala",
            time: 45,
            difficulty: "medium",
            description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
            category: "curry",
            ingredients: [
                "500g chicken breast",
                "1 cup yogurt",
                "2 tbsp tikka masala spice",
                "1 onion",
                "2 cloves garlic",
                "1 can tomato puree",
                "1/2 cup cream",
                "Fresh cilantro"
            ],
            steps: [
                "Marinate chicken in yogurt and spices for at least 30 minutes.",
                "Grill or pan-fry chicken until cooked; set aside.",
                "In the same pan, sauté onion and garlic until soft.",
                "Add tomato puree and simmer for 10 minutes.",
                "Stir in cream, then add chicken.",
                "Garnish with cilantro and serve with rice or naan."
            ]
        },
        {
            id: 3,
            title: "Homemade Croissants",
            time: 180,
            difficulty: "hard",
            description: "Buttery, flaky French pastries that require patience but deliver amazing results.",
            category: "baking",
            ingredients: [
                "500g strong bread flour",
                "10g salt",
                "50g sugar",
                "10g instant yeast",
                "300ml cold milk",
                "250g unsalted butter (for laminating)"
            ],
            steps: [
                "Make the dough: mix flour, salt, sugar, yeast, and milk. Knead until smooth.",
                "Shape into a rectangle, wrap, and chill for 2 hours.",
                "Prepare the butter block: beat butter into a flat square between parchment paper.",
                {
                    text: "Laminate the dough (create layers)",
                    substeps: [
                        "Roll dough into a rectangle large enough to wrap butter.",
                        "Place butter in center, fold dough over it, seal edges.",
                        "Roll out into a long rectangle, then fold into thirds (like a letter).",
                        "Chill for 30 minutes.",
                        "Repeat rolling and folding two more times, chilling between each."
                    ]
                },
                "Roll dough to final thickness and cut into triangles.",
                "Shape into croissants and proof until doubled.",
                "Brush with egg wash and bake at 200°C for 15-18 minutes."
            ]
        },
        {
            id: 4,
            title: "Greek Salad",
            time: 15,
            difficulty: "easy",
            description: "Fresh vegetables, feta cheese, and olives tossed in olive oil and herbs.",
            category: "salad",
            ingredients: [
                "2 large tomatoes",
                "1 cucumber",
                "1 red onion",
                "200g feta cheese",
                "100g Kalamata olives",
                "3 tbsp olive oil",
                "1 tsp dried oregano",
                "Salt and pepper"
            ],
            steps: [
                "Chop tomatoes, cucumber, and onion into bite-sized pieces.",
                "Place in a bowl, add olives and crumbled feta.",
                "Drizzle with olive oil, sprinkle oregano, salt, and pepper.",
                "Toss gently and serve."
            ]
        },
        {
            id: 5,
            title: "Beef Wellington",
            time: 120,
            difficulty: "hard",
            description: "Tender beef fillet coated with mushroom duxelles and wrapped in puff pastry.",
            category: "meat",
            ingredients: [
                "500g beef fillet",
                "2 tbsp olive oil",
                "500g mushrooms",
                "2 shallots",
                "2 cloves garlic",
                "Fresh thyme",
                "8 slices prosciutto",
                "1 sheet puff pastry",
                "1 egg (for egg wash)"
            ],
            steps: [
                "Season beef and sear in hot oil until browned all over. Chill.",
                {
                    text: "Make duxelles (mushroom paste)",
                    substeps: [
                        "Finely chop mushrooms, shallots, and garlic.",
                        "Sauté with thyme until moisture evaporates.",
                        "Season and let cool."
                    ]
                },
                "Lay out prosciutto on plastic wrap, spread duxelles over it.",
                "Wrap beef in prosciutto, using plastic to form a tight log. Chill.",
                "Roll out puff pastry, wrap beef, seal edges with egg wash.",
                "Chill again, then score pastry, brush with egg wash.",
                "Bake at 200°C for 20-25 minutes until golden.",
                "Rest before slicing."
            ]
        },
        {
            id: 6,
            title: "Vegetable Stir Fry",
            time: 20,
            difficulty: "easy",
            description: "Colorful mixed vegetables cooked quickly in a savory sauce.",
            category: "vegetarian",
            ingredients: [
                "1 bell pepper",
                "1 carrot",
                "100g broccoli",
                "100g snap peas",
                "2 tbsp soy sauce",
                "1 tbsp sesame oil",
                "1 clove garlic",
                "1 tsp ginger"
            ],
            steps: [
                "Slice all vegetables into thin strips.",
                "Heat oil in a wok, add garlic and ginger.",
                "Add vegetables and stir-fry for 3-4 minutes.",
                "Add soy sauce and toss to coat.",
                "Serve hot with rice or noodles."
            ]
        },
        {
            id: 7,
            title: "Pad Thai",
            time: 30,
            difficulty: "medium",
            description: "Thai stir-fried rice noodles with shrimp, peanuts, and tangy tamarind sauce.",
            category: "noodles",
            ingredients: [
                "200g rice noodles",
                "200g shrimp",
                "2 eggs",
                "100g bean sprouts",
                "3 tbsp fish sauce",
                "2 tbsp tamarind paste",
                "1 tbsp sugar",
                "Crushed peanuts, lime"
            ],
            steps: [
                "Soak noodles in warm water until soft; drain.",
                "Mix fish sauce, tamarind, sugar, and a little water for sauce.",
                "Stir-fry shrimp until pink, push aside.",
                "Scramble eggs in same pan, add noodles and sauce.",
                "Toss everything, add bean sprouts.",
                "Serve with peanuts, lime wedges, and chili flakes."
            ]
        },
        {
            id: 8,
            title: "Margherita Pizza",
            time: 60,
            difficulty: "medium",
            description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
            category: "pizza",
            ingredients: [
                "500g pizza dough",
                "200g canned tomatoes",
                "200g fresh mozzarella",
                "Fresh basil leaves",
                "Olive oil",
                "Salt"
            ],
            steps: [
                "Preheat oven to 250°C with pizza stone if available.",
                "Roll out dough into a thin round.",
                "Spread crushed tomatoes over base, leaving border.",
                "Tear mozzarella and scatter over.",
                "Bake for 8-10 minutes until crust is golden.",
                "Top with fresh basil leaves and a drizzle of olive oil."
            ]
        }
    ];

    // ---------- DOM SELECTIONS ----------
    const recipeContainer = document.querySelector('#recipe-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortButtons = document.querySelectorAll('.sort-btn');

    // ---------- STATE ----------
    let currentFilter = 'all';
    let currentSort = 'none';

    // ---------- PART 1: RENDER FUNCTION ----------
    const renderRecipes = (recipesToRender) => {
        const recipeCardsHTML = recipesToRender.map(createRecipeCard).join('');
        recipeContainer.innerHTML = recipeCardsHTML;
    };

    // ---------- PART 3: RECURSIVE STEPS RENDERING ----------
    const renderSteps = (steps, level = 0) => {
        let html = '';
        steps.forEach(step => {
            if (typeof step === 'string') {
                html += `<li style="margin-left: ${level * 1.5}rem">${step}</li>`;
            } else if (step.text && step.substeps) {
                html += `<li style="margin-left: ${level * 1.5}rem"><strong>${step.text}</strong>`;
                html += `<ul class="nested-steps">`;
                html += renderSteps(step.substeps, level + 1);
                html += `</ul></li>`;
            }
        });
        return html;
    };

    const createStepsHTML = (steps) => {
        if (!steps || steps.length === 0) return '<p>No steps available.</p>';
        return `<ul class="steps-list">${renderSteps(steps)}</ul>`;
    };

    // ---------- PART 1 & 3: CREATE RECIPE CARD ----------
    const createRecipeCard = (recipe) => {
        const stepsHTML = createStepsHTML(recipe.steps);
        const ingredientsHTML = recipe.ingredients 
            ? `<ul class="ingredients-list">${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>`
            : '<p>No ingredients listed.</p>';
        
        return `
            <div class="recipe-card" data-id="${recipe.id}">
                <h3>${recipe.title}</h3>
                <div class="recipe-meta">
                    <span>⏱️ ${recipe.time} min</span>
                    <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
                    <button class="toggle-btn" data-recipe-id="${recipe.id}" data-toggle="steps">Show Steps</button>
                    <button class="toggle-btn" data-recipe-id="${recipe.id}" data-toggle="ingredients">Show Ingredients</button>
                </div>
                <p>${recipe.description}</p>
                <div class="steps-container" id="steps-${recipe.id}">
                    <h4>Cooking Steps:</h4>
                    ${stepsHTML}
                </div>
                <div class="ingredients-container" id="ingredients-${recipe.id}">
                    <h4>Ingredients:</h4>
                    ${ingredientsHTML}
                </div>
            </div>
        `;
    };

    // ---------- PART 2: FILTER FUNCTIONS ----------
    const filterByDifficulty = (recipes, difficulty) => {
        return recipes.filter(recipe => recipe.difficulty === difficulty);
    };
    const filterQuickRecipes = (recipes) => {
        return recipes.filter(recipe => recipe.time < 30);
    };
    const applyFilter = (recipes, filterType) => {
        switch(filterType) {
            case 'easy': return filterByDifficulty(recipes, 'easy');
            case 'medium': return filterByDifficulty(recipes, 'medium');
            case 'hard': return filterByDifficulty(recipes, 'hard');
            case 'quick': return filterQuickRecipes(recipes);
            default: return [...recipes];
        }
    };

    // ---------- PART 2: SORT FUNCTIONS ----------
    const sortByName = (recipes) => {
        return [...recipes].sort((a, b) => a.title.localeCompare(b.title));
    };
    const sortByTime = (recipes) => {
        return [...recipes].sort((a, b) => a.time - b.time);
    };
    const applySort = (recipes, sortType) => {
        switch(sortType) {
            case 'name': return sortByName(recipes);
            case 'time': return sortByTime(recipes);
            default: return [...recipes];
        }
    };

    // ---------- PART 2: UI UPDATE FUNCTIONS ----------
    const updateActiveFilterButton = (filterType) => {
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === filterType) btn.classList.add('active');
        });
    };
    const updateActiveSortButton = (sortType) => {
        sortButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.sort === sortType) btn.classList.add('active');
        });
    };

    // ---------- PART 2: MAIN UPDATE FUNCTION ----------
    const updateDisplay = () => {
        let recipesToDisplay = [...recipes];
        recipesToDisplay = applyFilter(recipesToDisplay, currentFilter);
        recipesToDisplay = applySort(recipesToDisplay, currentSort);
        updateActiveFilterButton(currentFilter);
        updateActiveSortButton(currentSort);
        renderRecipes(recipesToDisplay);
        console.log(`Displaying ${recipesToDisplay.length} recipes (Filter: ${currentFilter}, Sort: ${currentSort})`);
    };

    // ---------- PART 2: EVENT HANDLERS (FILTER/SORT) ----------
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

    // ---------- PART 3: TOGGLE HANDLER (EVENT DELEGATION) ----------
    const handleToggleClick = (event) => {
        const button = event.target;
        if (!button.classList.contains('toggle-btn')) return;
        
        const recipeId = button.dataset.recipeId;
        const toggleType = button.dataset.toggle; // 'steps' or 'ingredients'
        const container = document.getElementById(`${toggleType}-${recipeId}`);
        if (!container) return;
        
        container.classList.toggle('visible');
        const isVisible = container.classList.contains('visible');
        button.textContent = isVisible 
            ? `Hide ${toggleType.charAt(0).toUpperCase() + toggleType.slice(1)}` 
            : `Show ${toggleType.charAt(0).toUpperCase() + toggleType.slice(1)}`;
    };

    // ---------- SETUP EVENT LISTENERS ----------
    const setupEventListeners = () => {
        filterButtons.forEach(btn => btn.addEventListener('click', handleFilterClick));
        sortButtons.forEach(btn => btn.addEventListener('click', handleSortClick));
        recipeContainer.addEventListener('click', handleToggleClick); // event delegation for toggles
        console.log('Event listeners attached');
    };

    // ---------- INITIALIZE ----------
    const init = () => {
        console.log('RecipeApp initializing...');
        updateDisplay();
        setupEventListeners();
        console.log('RecipeApp ready!');
    };

    // Expose public API
    window.RecipeApp = { init };
})();

// Start the app
window.RecipeApp.init();