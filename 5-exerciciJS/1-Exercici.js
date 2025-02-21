import { getUser, getPosts, getComments } from '../4-event-loop/9-secuencial-async.js';

//funció per contar el número total de comentaris d'un usuari utilitzant map i reduce
async function countUserComments(userId){
    const posts = await getPosts(userId);
    const commentsPromises = posts.map(post => getComments(post.id));
    const commentsArray = await Promise.all(commentsPromises);
    return commentsArray.reduce((total, comments) => total + comments.length, 0);
}

//funció per obtenir el títol dels posts amb més de 30 caràcters utilitzant filter i map
async function getLongPostTitles(userId){
    const posts = await getPosts(userId);
    const longPosts = posts.filter(post => post.body.length > 30);
    const titles = longPosts.map(post => post.title);
    return{
        quantitat: longPosts.length,
        titles: titles
    }
}

//funció per ordenar els posts d'un usuari segons la longitud del cos del post i retornar els títols ordenats
async function getSortedPostTitlesByLength(userId){
    const posts = await getPosts(userId);
    const sortedPosts = [...posts].sort((a, b) => b.body.length - a.body.length);
    const titles = sortedPosts.map(post => post.title);
    return titles;
}


(async () => {
    const userId = 1;

    const user = await getUser(userId);
    console.log('Usuari:', user);

    const totalComments = await countUserComments(userId);
    console.log("Número total dels comentaris de l'usuari", totalComments);

    const longPostTitles = await getLongPostTitles(userId);
    console.log("Títols dels posts amb més de 30 caràcters:", longPostTitles);

    const sortedPostTitles = await getSortedPostTitlesByLength(userId);
    console.log("Títols de posts ordenats segons la longitud del cos:", sortedPostTitles);
})();