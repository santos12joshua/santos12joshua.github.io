document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("grid");
    let board = Array(4).fill().map(() => Array(4).fill(0));

    function createBoard() {
        grid.innerHTML = "";
        board.forEach((row, r) => {
            row.forEach((value, c) => {
                const tile = document.createElement("div");
                tile.classList.add("tile");
                tile.textContent = value === 0 ? "" : value;
                grid.appendChild(tile);
            });
        });
    }

    function addRandomTile() {
        let emptyTiles = [];
        board.forEach((row, r) => {
            row.forEach((value, c) => {
                if (value === 0) emptyTiles.push({ r, c });
            });
        });
        if (emptyTiles.length > 0) {
            let { r, c } = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
            board[r][c] = Math.random() > 0.1 ? 2 : 4;
        }
    }

    function slide(row) {
        let filteredRow = row.filter(num => num !== 0);
        let zeros = Array(row.length - filteredRow.length).fill(0);
        return [...filteredRow, ...zeros];
    }

    function combine(row) {
        for (let i = 0; i < row.length - 1; i++) {
            if (row[i] !== 0 && row[i] === row[i + 1]) {
                row[i] *= 2;
                row[i + 1] = 0;
            }
        }
        return row;
    }

    function moveLeft() {
        board = board.map(row => slide(combine(slide(row)))); 
        addRandomTile();
        createBoard();
    }

    function moveRight() {
        board = board.map(row => slide(combine(slide(row.reverse()))).reverse());
        addRandomTile();
        createBoard();
    }

    function transpose(matrix) {
        return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
    }

    function moveUp() {
        board = transpose(board);
        board = board.map(row => slide(combine(slide(row))));
        board = transpose(board);
        addRandomTile();
        createBoard();
    }

    function moveDown() {
        board = transpose(board);
        board = board.map(row => slide(combine(slide(row.reverse()))).reverse());
        board = transpose(board);
        addRandomTile();
        createBoard();
    }

    document.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "ArrowLeft":
                moveLeft();
                break;
            case "ArrowRight":
                moveRight();
                break;
            case "ArrowUp":
                moveUp();
                break;
            case "ArrowDown":
                moveDown();
                break;
        }
    });

    // Swipe detection for mobile
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    function handleSwipe() {
        let deltaX = touchEndX - touchStartX;
        let deltaY = touchEndY - touchStartY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Horizontal swipe
            if (deltaX > 0) {
                moveRight();
            } else {
                moveLeft();
            }
        } else {
            // Vertical swipe
            if (deltaY > 0) {
                moveDown();
            } else {
                moveUp();
            }
        }
    }

    grid.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    });

    grid.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].clientX;
        touchEndY = e.changedTouches[0].clientY;
        handleSwipe();
    });

    function initGame() {
        addRandomTile();
        addRandomTile();
        createBoard();
    }

    initGame();

    function updateTime() {
        const timeSpan = document.getElementById("time_span");
        if (timeSpan) {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, "0");
            const minutes = now.getMinutes().toString().padStart(2, "0");
            const seconds = now.getSeconds().toString().padStart(2, "0");
            timeSpan.textContent = `${hours}:${minutes}:${seconds}`;
        }
    }

    // Update the time every second
    setInterval(updateTime, 1000);
    
    // Set the time immediately on page load
    updateTime();
});
