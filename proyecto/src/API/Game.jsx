
//const API_KEY = process.env.REACT_APP_API_KEY;
//const API_url = process.env.REACT_APP_API_url;

function game(){
    return(
    fetch(`https://rawg.io/api/games?token&key=${API_KEY}`)
    .then(res => res.json())
    .then(data => console.log(data)
    .catch(error => console.error('Error:', error))
    )
    );
}

export default game();