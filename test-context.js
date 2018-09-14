var context = require.context('./spec', true, /Spec\.js$/);
context.keys().forEach(context);
console.log(context.keys());
