#!/usr/bin/env node

/*
This program is built to review on my node.js skills. I installed custom modules like chalk for aesthetic purposes.
Important key Concepts:

 - Use a Promise object to make a trigger a timeout callback function.
 - Async and await are usually used together
 - High-level await can be used outside of an async function.
*/
import chalk from 'chalk';
import gradient from 'gradient-string';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import { createSpinner } from 'nanospinner';

console.log(chalk.blue("Cool Stuff"));

let playerName, myPokemon;


const timeOut = (ms = 2000) => new Promise((res) => {
    setTimeout(res, ms);
})

async function welcome(){
    const introduction = chalkAnimation.neon('Are you ready for a Pokemon Adventure?');


    await timeOut();
    introduction.stop();

    console.log(`
        So here is the deal!
        My name is Professor BriBri and I am 
        currently looking for a trainer to take
        in a couple of my pokemons. You, ${chalk.yellow(playerName)},
        came at the right time!
        There are 3 Pokemons to Choose From:
        ${chalk.blue('- Squirtle')}
        ${chalk.green('- Bulbasaur')}
        ${chalk.red('- Charmander')}`);

    
}

async function askName(){
    const answer = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name?',
        default(){
            return 'Player';
        }
    })

    playerName = answer.player_name
}

async function pokemon(){
    const companion = await inquirer.prompt({
        name: 'Question',
        type: 'list',
        message: 'Choose your your pokemon',
        choices: ['Squirtle', 'Bulbasaur', 'Charmander']
    })
    await spin();
    myPokemon = companion.Question;
    console.log(`
        Congrats you chose ${chalk.yellow(myPokemon)}
        Now Go ON! Journey with ${myPokemon} and challenge the WORLD`);
}

async function spin(){
    const spinner = createSpinner('Claiming Pokemon...').start();
    await timeOut();
    spinner.success({text: 'Pokemon claimed successfully'});
}

await askName();
await welcome();
await pokemon();

console.log('finish');