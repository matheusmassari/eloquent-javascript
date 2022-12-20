const initialUrl = "/posts/:postId/comments/:commentId";

// const resultUrl = replaceParamsInUrl(initialUrl, [
//     { from: ":postId", to: 1 },
//     { from: ":commentId", to: 3 },
// ]);

const replaceParamsInUrl = (url, replacements) => {
    return replacements.reduce((acc, replacement) => {
        url = url.replace(":" + replacement.from, replacement.to);
        return url;
    }, url);
};

const resultUrl = replaceParamsInUrl(initialUrl, [
    { from: "postId", to: 1 },
    { from: "commentId", to: 3 },
]);

console.log(resultUrl);
