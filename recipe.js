class RecipeCalculator {
    constructor() {
        this.recipes = {
            'classic': {
                name: 'Классический бисквит',
                baseDiameter: 20,
                ingredients: [
                    { name: 'Мука пшеничная', amount: 150, unit: 'г' },
                    { name: 'Сахар', amount: 180, unit: 'г' },
                    { name: 'Яйца куриные', amount: 4, unit: 'шт' },
                    { name: 'Сливочное масло', amount: 30, unit: 'г' },
                    { name: 'Разрыхлитель', amount: 5, unit: 'г' },
                    { name: 'Ванильный сахар', amount: 10, unit: 'г' },
                    { name: 'Соль', amount: 1, unit: 'г' }
                ]
            },
            'genoise': {
                name: 'Генуэзский бисквит',
                baseDiameter: 20,
                ingredients: [
                    { name: 'Мука пшеничная', amount: 120, unit: 'г' },
                    { name: 'Сахар', amount: 150, unit: 'г' },
                    { name: 'Яйца куриные', amount: 5, unit: 'шт' },
                    { name: 'Сливочное масло', amount: 50, unit: 'г' },
                    { name: 'Ванильный экстракт', amount: 5, unit: 'мл' },
                    { name: 'Крахмал', amount: 30, unit: 'г' },
                    { name: 'Соль', amount: 2, unit: 'г' }
                ]
            },
            'cuillere': {
                name: 'Бисквит a la cuillere',
                baseDiameter: 20,
                ingredients: [
                    { name: 'Мука пшеничная', amount: 80, unit: 'г' },
                    { name: 'Сахарная пудра', amount: 100, unit: 'г' },
                    { name: 'Сахар', amount: 50, unit: 'г' },
                    { name: 'Лимонный сок', amount: 5, unit: 'мл' },
                    { name: 'Яйца куриные', amount: 4, unit: 'шт' },
                    { name: 'Ванильный сахар', amount: 10, unit: 'г' }
                ]
            },
            'chiffon': {
                name: 'Шифоновый бисквит',
                baseDiameter: 20,
                ingredients: [
                    { name: 'Мука пшеничная', amount: 200, unit: 'г' },
                    { name: 'Сахар', amount: 150, unit: 'г' },
                    { name: 'Яйца куриные', amount: 5, unit: 'шт' },
                    { name: 'Растительное масло', amount: 120, unit: 'мл' },
                    { name: 'Вода холодная', amount: 120, unit: 'мл' },
                    { name: 'Разрыхлитель', amount: 10, unit: 'г' },
                    { name: 'Ванильный экстракт', amount: 10, unit: 'мл' }
                ]
            },
            'dacquoise': {
                name: 'Бисквит Дакуаз',
                baseDiameter: 20,
                ingredients: [
                    { name: 'Миндальная мука', amount: 150, unit: 'г' },
                    { name: 'Сахарная пудра', amount: 150, unit: 'г' },
                    { name: 'Белки куриные', amount: 150, unit: 'г' },
                    { name: 'Сахар', amount: 200, unit: 'г' },
                    { name: 'Кукурузный крахмал', amount: 20, unit: 'г' },
                    { name: 'Ванильный экстракт', amount: 5, unit: 'мл' },
                    { name: 'Лимонный сок', amount: 5, unit: 'мл' },
                    { name: 'Соль', amount: 2, unit: 'г' }
                ]
            },
            'joconde': {
                name: 'Бисквит Джоконда',
                baseDiameter: 20,
                ingredients: [
                    { name: 'Миндальная мука', amount: 150, unit: 'г' },
                    { name: 'Сахарная пудра', amount: 200, unit: 'г' },
                    { name: 'Яйца куриные', amount: 3, unit: 'шт' },
                    { name: 'Яичные белки', amount: 230, unit: 'г' },
                    { name: 'Сахар', amount: 50, unit: 'г' },
                    { name: 'Мука пшеничная', amount: 80, unit: 'г' },
                    { name: 'Сливочное масло', amount: 30, unit: 'г' }
                ]
            },
            'choux': {
                name: 'Заварной бисквит',
                baseDiameter: 20,
                ingredients: [
                    { name: 'Мука пшеничная', amount: 200, unit: 'г' },
                    { name: 'Сливочное масло', amount: 100, unit: 'г' },
                    { name: 'Яйца куриные', amount: 6, unit: 'шт' },
                    { name: 'Вода', amount: 240, unit: 'мл' },
                    { name: 'Соль', amount: 2, unit: 'г' }
                ]
            },
            'pain-de-genes': {
                name: 'Бисквит Pain de gênes',
                baseDiameter: 20,
                ingredients: [
                    { name: 'Миндальная мука', amount: 150, unit: 'г' },
                    { name: 'Сахар', amount: 150, unit: 'г' },
                    { name: 'Яйца куриные', amount: 5, unit: 'шт' },
                    { name: 'Сливочное масло', amount: 100, unit: 'г' },
                    { name: 'Мука пшеничная', amount: 50, unit: 'г' },
                    { name: 'Разрыхлитель', amount: 5, unit: 'г' },
                    { name: 'Миндальный экстракт', amount: 5, unit: 'мл' },
                    { name: 'Соль', amount: 2, unit: 'г' }
                ]
            },
            'emmanuel': {
                name: 'Бисквит Эммануль',
                baseDiameter: 20,
                ingredients: [
                    { name: 'Мука пшеничная', amount: 140, unit: 'г' },
                    { name: 'Сахар', amount: 160, unit: 'г' },
                    { name: 'Яйца куриные', amount: 4, unit: 'шт' },
                    { name: 'Сливочное масло', amount: 40, unit: 'г' },
                    { name: 'Ванильный сахар', amount: 15, unit: 'г' },
                    { name: 'Разрыхлитель', amount: 7, unit: 'г' },
                    { name: 'Соль', amount: 1, unit: 'г' },

                ]
            },
            'madeleine': {
                name: 'Бисквит Мадлен',
                baseDiameter: 20,
                ingredients: [
                    { name: 'Мука пшеничная', amount: 120, unit: 'г' },
                    { name: 'Сахар', amount: 100, unit: 'г' },
                    { name: 'Яйца куриные', amount: 3, unit: 'шт' },
                    { name: 'Сливочное масло', amount: 80, unit: 'г' },
                    { name: 'Мед', amount: 20, unit: 'г' },
                    { name: 'Разрыхлитель', amount: 5, unit: 'г' },
                    { name: 'Цедра лимона', amount: 5, unit: 'г' },
                    { name: 'Соль', amount: 1, unit: 'г' }


                ]
            },
            'butter': {
                name: 'Масляный бисквит',
                baseDiameter: 20,
                ingredients: [
                    { name: 'Мука пшеничная', amount: 200, unit: 'г' },
                    { name: 'Сахар', amount: 180, unit: 'г' },
                    { name: 'Яйца куриные', amount: 4, unit: 'шт' },
                    { name: 'Сливочное масло', amount: 120, unit: 'г' },
                    { name: 'Разрыхлитель', amount: 8, unit: 'г' },
                    { name: 'Ванильный экстракт', amount: 5, unit: 'мл' },
                    { name: 'Соль', amount: 2, unit: 'г' }
                ]
            },
            'yolks': {
                name: 'Бисквит на желтках',
                baseDiameter: 20,
                ingredients: [
                    { name: 'Мука пшеничная', amount: 130, unit: 'г' },
                    { name: 'Сахар', amount: 140, unit: 'г' },
                    { name: 'Желтки', amount: 6, unit: 'шт' },
                    { name: 'Сливочное масло', amount: 60, unit: 'г' },
                    { name: 'Разрыхлитель', amount: 6, unit: 'г' },
                    { name: 'Ванильный сахар', amount: 10, unit: 'г' },
                    { name: 'Соль', amount: 1, unit: 'г' }

                ]
            }
        };

        this.dryIngredients = ['соль', 'сахар', 'ванильный сахар', 'разрыхлитель'];
    }

    calculateForDiameter(biscuitType, targetDiameter) {
        const recipe = this.recipes[biscuitType];
        if (!recipe) {
            throw new Error('Рецепт не найден');
        }

        const baseDiameter = recipe.baseDiameter;
        const coefficient = Math.pow(targetDiameter / baseDiameter, 2);

        return recipe.ingredients.map(ingredient => {
            let newAmount;
            const calculatedAmount = ingredient.amount * coefficient;

            if (ingredient.unit === 'шт') {
                newAmount = calculatedAmount.toFixed(1);
            } else if (ingredient.unit === 'мл') {
                newAmount = Math.max(1, Math.round(calculatedAmount));
            } else {
                newAmount = Math.round(calculatedAmount);
            }
            
            const shouldUsePinch = this.shouldUsePinch(ingredient.name, newAmount);
            
            return {
                ...ingredient,
                newAmount: newAmount,
                displayAmount: shouldUsePinch ? 'щепотка' : newAmount,
                displayUnit: shouldUsePinch ? '' : ingredient.unit,
                isPinch: shouldUsePinch
            };
        });
    }

    shouldUsePinch(ingredientName, amount) {
        const lowerName = ingredientName.toLowerCase();
        const isDryIngredient = this.dryIngredients.some(dry => 
            lowerName.includes(dry)
        );
        
        return isDryIngredient && amount === 0;
    }

    updateIngredientDisplay(ingredients) {
        ingredients.forEach(ingredient => {
            const amountElements = document.querySelectorAll(`.ingredient-amount[data-base="${ingredient.amount}"]`);
            amountElements.forEach(element => {
                const displayText = ingredient.isPinch ? 'щепотка' : `${ingredient.displayAmount} ${ingredient.displayUnit}`;
                element.textContent = displayText;
                
                if (ingredient.isPinch) {
                    element.classList.add('pinch');
                } else {
                    element.classList.remove('pinch');
                }
            });
        });
    }

    showCalculationMessage(targetDiameter) {
        const messageElement = document.getElementById('calculation-message');
        if (messageElement) {
            messageElement.textContent = `✓ Ингредиенты успешно пересчитаны для Ø ${targetDiameter} см`;
            messageElement.style.display = 'block';
            
            setTimeout(() => {
                messageElement.style.display = 'none';
            }, 5000);
        }
    }

    validateDiameter(diameter) {
        if (isNaN(diameter) || diameter < 1 || diameter > 100) {
            throw new Error('Диаметр должен быть от 1 до 100 см');
        }
        return true;
    }

    scrollToIngredients() {
        const ingredientsSection = document.querySelector('.ingredients-section');
        if (ingredientsSection) {
            ingredientsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            ingredientsSection.style.transform = 'scale(1.02)';
            setTimeout(() => {
                ingredientsSection.style.transform = 'scale(1)';
            }, 300);
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    const diameterInput = document.getElementById('diameter');
    const biscuitType = document.body.dataset.biscuitType;

    if (calculateBtn && diameterInput && biscuitType) {
        const calculator = new RecipeCalculator();
        
        diameterInput.min = 1;
        diameterInput.max = 100;
        diameterInput.placeholder = "1-100 см";

        calculateBtn.addEventListener('click', function() {
            const targetDiameter = parseFloat(diameterInput.value);
            
            try {
                calculator.validateDiameter(targetDiameter);
            } catch (error) {
                alert(error.message);
                return;
            }

            try {
                const ingredients = calculator.calculateForDiameter(biscuitType, targetDiameter);
                calculator.updateIngredientDisplay(ingredients);
                calculator.showCalculationMessage(targetDiameter);
                setTimeout(() => calculator.scrollToIngredients(), 100);
            } catch (error) {
                alert('Ошибка расчета: ' + error.message);
            }
        });
    }
});