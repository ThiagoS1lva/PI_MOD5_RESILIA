import readline from 'readline'

const properties = {}; // objeto que armazenará as propriedades e seus valores

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt('Digite uma propriedade de CSS ou SAIR para sair: ');
rl.prompt();

rl.on('line', (input) => {
  if (input.trim().toUpperCase() === 'SAIR') {
    // ao digitar "SAIR", ordenar as propriedades em ordem alfabética
    const sortedProperties = Object.keys(properties).sort();
    
    // imprimir na tela uma propriedade por linha
    sortedProperties.forEach(prop => console.log(prop));
    
    rl.close();
  } else {
    // se a propriedade já existe, apenas imprime uma mensagem
    if (properties[input]) {
      console.log(`A propriedade ${input} já foi adicionada.`);
    } else {
      // se a propriedade não existe, adiciona ao objeto com um valor padrão
      properties[input] = '';
      console.log(`A propriedade ${input} foi adicionada.`);
    }
    rl.prompt();
  }
});
