// Consulta y muestra la info de un pokemon segun el nombre que se ingrese
async function obtenerInfoPokemon(name){
    const respuesta = await fetch (`https://pokeapi.co/api/v2/pokemon/${name}`);
    if(!respuesta.ok){
        throw new Error("Error al cargar datos");
    }

    return await respuesta.json();
}

async function mostarInfoPokemon(name){
    try {
        const pokemon = await obtenerInfoPokemon(name);
        console.log("INFO DEL POKEMON:",name);
        console.log(pokemon);
    } catch (error){
        console.error(error);
    }
}

mostarInfoPokemon("abomasnow");

// Consulta y muestra las habilidades de un pokemon segun el nombre que se ingrese

async function mostrarHabilidadesPokemon(name){
    try {
        const pokemon = await obtenerInfoPokemon(name);
        console.log("HABILIDADES DEL POKEMON:",name);
        //console.log(pokemon.abilities);
        console.log("Habilidad 1:",pokemon.abilities[0].ability.name);
        console.log("Habilidad 2:",pokemon.abilities[1].ability.name);
    } catch (error){
        console.error(error);
    }

    
}

mostrarHabilidadesPokemon("pikachu")

// Consulta y muestra el atributo de un pokemon segun el nombre que ingrese

async function mostrarAtributoPokemon(name){
    try {
        const pokemon = await obtenerInfoPokemon(name);
        console.log("ATRIBUTO DEL POKEMON:",name);
        //console.log(pokemon.types);
        console.log("Atributo 1:",pokemon.types[0].type.name);
    } catch (error){
        console.error(error);
    }
}

mostrarAtributoPokemon("abra");

// Obtiene una lista de los primeros 50 pokemon

async function obtenerListaPokemon(){
    
    const respuesta = await fetch ("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0");
    if(!respuesta.ok){
        throw new Error("Error al cargar datos");
    }

    return await respuesta.json();
}

async function mostarListaPokemon(){
    try {
        const pokemon = await obtenerListaPokemon();
        console.log("LISTA DE LOS PRIMEROS 50 POKEMON:");
        console.log(pokemon);
    } catch (error){
        console.error(error);
    }
}

mostarListaPokemon();

// Consulta la info de un pokemon en estado base segun el ID que se ingrese

async function obtenerInfoPokemon2(id){
    const respuesta = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);
    if(!respuesta.ok){
        throw new Error("Error al cargar datos");
    }
    return await respuesta.json();
}

// Consulta la info de un pokemon en su estado evolutivo segun el ID que se ingrese
async function obtenerEvolucion(id){
    const respuesta = await fetch (`https://pokeapi.co/api/v2/evolution-chain/${id}`);
    if(!respuesta.ok){
        throw new Error("Error al cargar datos");
    }

    return await respuesta.json();
}

// Obtiene el nombre y tipo de un pokemon así como el de su evolución
async function obtenerNombreTipoEvolucion(id){
    try {
        const pokemon = await obtenerInfoPokemon2(id);
        const evolucion = await obtenerEvolucion(id);
        console.log("NOMBRE POKEMON: ",pokemon.name, "\nTIPO DE ATRIBUTO POKEMON:",pokemon.types[0].type.name);
        //console.log(evolucion.chain);
        //console.log(evolucion.chain.species.name);
        console.log(pokemon.name,"EVOLUCIONA A:",evolucion.chain.evolves_to[0].species.name);
        console.log(evolucion.chain.evolves_to[0].species.name, "EVOLUCIONA A:",
        evolucion.chain.evolves_to[0].evolves_to[0].species.name);
    } catch (error){
        console.error(error);
    }
}

obtenerNombreTipoEvolucion(1); //Prfo tengo una duda en este metodo, cuando mando el ID=1, me toma 
// correctamente el poquemon base y sus evoluciones, pero cuando Ingreso el ID=2, me da el nombre base del
// pokemon bien, pero en las evoluciones ya cominza a saltarse a otros personajes y no se porq, me podría 
// instruir en que parte estoy fallando.
