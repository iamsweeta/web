class BiscuitCalculator {
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

    calculateIngredients(biscuitType, baseDiameter, targetDiameter) {
        const recipe = this.recipes[biscuitType];
        if (!recipe) {
            throw new Error('Рецепт не найден');
        }

        const actualBaseDiameter = baseDiameter || recipe.baseDiameter;
        const coefficient = Math.pow(targetDiameter / actualBaseDiameter, 2);

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
                coefficient: coefficient,
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

    formatAmount(amount, unit) {
        if (unit === 'шт') {
            const num = parseFloat(amount);
            if (num % 1 === 0) {
                return Math.round(num);
            }
            return num.toFixed(1);
        }
        return amount;
    }

    getChangeType(oldAmount, newAmount) {
        const change = (newAmount - oldAmount) / oldAmount * 100;
        if (change > 10) return 'increase';
        if (change < -10) return 'decrease';
        return 'same';
    }

    validateDiameter(diameter) {
        if (isNaN(diameter) || diameter < 1 || diameter > 100) {
            throw new Error('Диаметр должен быть от 1 до 100 см');
        }
        return true;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const calculator = new BiscuitCalculator();
    const calculateBtn = document.getElementById('calculate-btn');
    const biscuitTypeSelect = document.getElementById('biscuit-type');
    const baseDiameterInput = document.getElementById('base-diameter');
    const targetDiameterInput = document.getElementById('target-diameter');
    const resultsContainer = document.getElementById('results-container');
    const diameterFrom = document.querySelector('.diameter-from');
    const diameterTo = document.querySelector('.diameter-to');

    if (baseDiameterInput) {
        baseDiameterInput.min = 1;
        baseDiameterInput.max = 100;
        baseDiameterInput.placeholder = "1-100 см";
    }

    if (targetDiameterInput) {
        targetDiameterInput.min = 1;
        targetDiameterInput.max = 100;
        targetDiameterInput.placeholder = "1-100 см";
    }

    function calculateAndDisplay() {
        const biscuitType = biscuitTypeSelect.value;
        const baseDiameter = parseFloat(baseDiameterInput.value);
        const targetDiameter = parseFloat(targetDiameterInput.value);

        try {
            calculator.validateDiameter(baseDiameter);
            calculator.validateDiameter(targetDiameter);
        } catch (error) {
            showError(error.message);
            return;
        }

        try {
            const ingredients = calculator.calculateIngredients(biscuitType, baseDiameter, targetDiameter);
            updateResults(ingredients, baseDiameter, targetDiameter);
            updateDiameterDisplay(baseDiameter, targetDiameter);
            
            scrollToResults();
        } catch (error) {
            showError('Ошибка расчета: ' + error.message);
        }
    }

    function updateResults(ingredients, baseDiameter, targetDiameter) {
        const coefficient = ingredients[0]?.coefficient || 1;
        
        resultsContainer.innerHTML = ingredients.map(ingredient => {
            const formattedOld = calculator.formatAmount(ingredient.amount, ingredient.unit);
            const formattedNew = ingredient.isPinch ? 'щепотка' : calculator.formatAmount(ingredient.newAmount, ingredient.unit);
            const changeType = calculator.getChangeType(ingredient.amount, ingredient.newAmount);
            
            let changeIcon = '➡️';
            let changeClass = 'same';
            
            if (changeType === 'increase') {
                changeIcon = '📈';
                changeClass = 'increase';
            } else if (changeType === 'decrease') {
                changeIcon = '📉';
                changeClass = 'decrease';
            }

            if (ingredient.isPinch) {
                changeClass += ' pinch';
            }

            return `
                <div class="ingredient-row ${changeClass}">
                    <span class="ingredient-name">${ingredient.name}</span>
                    <span class="ingredient-amount old">${formattedOld} ${ingredient.unit}</span>
                    <span class="ingredient-amount new ${ingredient.isPinch ? 'pinch' : ''}">${formattedNew} ${ingredient.displayUnit}</span>
                    <span class="ingredient-change">${changeIcon}</span>
                </div>
            `;
        }).join('');

        const coefficientInfo = `
            <div class="coefficient-info">
                <p><strong>Коэффициент изменения: ${coefficient.toFixed(2)}x</strong></p>
                <p>Площадь формы ${coefficient > 1 ? 'увеличилась' : 'уменьшилась'} в ${Math.abs(coefficient).toFixed(2)} раза</p>
            </div>
        `;
        resultsContainer.insertAdjacentHTML('beforeend', coefficientInfo);
    }

    function updateDiameterDisplay(baseDiameter, targetDiameter) {
        diameterFrom.textContent = `Ø ${baseDiameter} см`;
        diameterTo.textContent = `Ø ${targetDiameter} см`;
    }

    function showError(message) {
        resultsContainer.innerHTML = `
            <div class="error-message">
                <span>❌ ${message}</span>
            </div>
        `;
    }

    function scrollToResults() {
        const resultsElement = document.querySelector('.calculator-results');
        if (resultsElement) {
            resultsElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            resultsElement.style.transform = 'scale(1.02)';
            setTimeout(() => {
                resultsElement.style.transform = 'scale(1)';
            }, 300);
        }
    }

    calculateBtn.addEventListener('click', function() {
        calculateAndDisplay();
    });


    resultsContainer.innerHTML = `
        <div class="no-results">
            <p>Введите параметры и нажмите "Рассчитать"</p>
        </div>
    `;
});