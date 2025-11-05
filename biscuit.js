document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const biscuitCards = document.querySelectorAll('.biscuit-card');
    const noResultsMessage = document.querySelector('.no-results-message');
    const countEasy = document.getElementById('count-easy');
    const countMedium = document.getElementById('count-medium');
    const countHard = document.getElementById('count-hard');

    console.log('Загружена страница бисквитов');
    console.log('Найдено карточек:', biscuitCards.length);
    console.log('Найдено кнопок фильтров:', filterButtons.length);

    function calculateStats() {
        let easyCount = 0;
        let mediumCount = 0;
        let hardCount = 0;

        biscuitCards.forEach(card => {
            const difficulty = card.dataset.difficulty;
            switch(difficulty) {
                case 'easy':
                    easyCount++;
                    break;
                case 'medium':
                    mediumCount++;
                    break;
                case 'hard':
                    hardCount++;
                    break;
            }
        });

        if (countEasy) countEasy.textContent = easyCount;
        if (countMedium) countMedium.textContent = mediumCount;
        if (countHard) countHard.textContent = hardCount;

        console.log('Статистика сложности:', { easy: easyCount, medium: mediumCount, hard: hardCount });

        return { easy: easyCount, medium: mediumCount, hard: hardCount };
    }

    function filterBiscuits(filter) {
        console.log('Применяем фильтр:', filter);
        
        let visibleCards = 0;
        
        biscuitCards.forEach(card => {
            const cardDifficulty = card.dataset.difficulty;
            
            if (filter === 'all' || cardDifficulty === filter) {
                card.style.display = 'block';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
                visibleCards++;
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px) scale(0.95)';
                    card.style.display = 'none';
            }
        });
        
        console.log('Показано карточек:', visibleCards);
        
        if (noResultsMessage) {
            if (visibleCards === 0) {
                noResultsMessage.style.display = 'flex';
                setTimeout(() => {
                    noResultsMessage.style.opacity = '1';
                }, 50);
            } else {
                noResultsMessage.style.opacity = '0';
                setTimeout(() => {
                    noResultsMessage.style.display = 'none';
                }, 300);
            }
        }
    }

        filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            console.log('Нажата кнопка фильтра:', filter);
            
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            this.classList.add('active');
            
            filterBiscuits(filter);
        });
    });

    function initializeAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }
            });
        }, observerOptions);

        biscuitCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px) scale(0.95)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    }

    calculateStats();
    initializeAnimations();
    filterBiscuits('all');

    console.log('Фильтрация бисквитов инициализирована');
});