import printToDom from '../helpers/data/printToDom';

// ** DOM Builder ** //

const fightCardBuilder = () => {
  let domstring = '';
  domstring += `<div class="card bg-secondary" style="width: 24rem;">
  <img src="https://media.istockphoto.com/vectors/cute-smiling-bear-muzzle16x16-pixel-art-icon-isolated-on-white-chat-vector-id1147096624?k=6&m=1147096624&s=170667a&w=0&h=Z67DLE_BVrx-sZLmq9iBWtHqdDJ2fCduBQbbB88R6K8=" class="card-img-top mt-3" alt="pixel bear">
  <div class="card-body">
    <h5 class="card-title">Preston</h5>
    <p class="card-text" id="strength">Strength: 100</p>
    <a href="#" class="btn btn-dark" id="run">Run</a>
    <a href="#" class="btn btn-dark" id="smash">Bear Smash</a>
  </div>
</div>`;
  printToDom('#fight', domstring);
};

export default fightCardBuilder;
