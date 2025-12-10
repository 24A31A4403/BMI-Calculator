body {
    font-family: Arial, sans-serif;
    background: #eef2ff;
    padding: 20px;
}

.container {
    max-width: 600px;
    margin: auto;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

h1, h2 {
    text-align: center;
}

.input-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}

.input-section input {
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #aaa;
}

button {
    grid-column: span 2;
    padding: 10px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background: #1d4ed8;
}

table {
    width: 100%;
    margin-top: 15px;
    border-collapse: collapse;
}

th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: center;
}

th {
    background: #2563eb;
    color: white;
}