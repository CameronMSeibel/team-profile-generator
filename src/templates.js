function generateCard(employee){
    let special = "";
    return`
    <div class="col">
    <div class="card shadow" style="width: 16rem">
        <div class="card-header bg-primary text-white">
            <h5 class="card-title">Employee Name</h5>
            <p class="card-text">Employee Role</p>
        </div>
        <div class="card-body bg-light">
            <ul class="list-group">
                <li class="list-group-item">ID: </li>
                <li class="list-group-item">EMAIL: </li>
                <li class="list-group-item">${special}</li>
            </ul>
        </div>
    </div>
</div>`;
}

function generatePage(cards){
    return `
<html>
    <head>
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </head>
    <body>
        <header class="bg-warning text-white">
            <h1>My Team</h1>
        </header>
        <main>
            ${cards}
        </main>
    </body>
</html>`;
}

module.exports = {generateCard, generatePage};