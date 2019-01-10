var alexa = require('alexa-app');
var app = new alexa.app();
app.launch(function(request, response){
 response.say("Hello there, I am a bot created to help you find what to eat");
 response.shouldEndSession(false);
})
app.intent('GetLunchSuggestions',
 {
  "slots": {},
  "utterances": [
   "what's for lunch",
   "where should {I|we} go for lunch",
   "I am hungry what is good food",
   "What should I eat",
   "Whats for dinner",
   "what should {we|I} for dinner"
  ]
 },
 function (request, response) {
  generate_suggestions(response);
  return; 
 }
);
function generate_suggestions(response){
 var food = ["Pizza", "Burgers", "Tacos", "Sandwich", "Bluenote"
 ];
var rand = food[Math.floor(Math.random() * food.length)];
response.say("How about some " + rand + " today?");
 response.send();
return ;
}
// Connect to lambda
exports.handler = app.lambda();
if ((process.argv.length === 3) && (process.argv[2] === 'schema'))
{
    console.log (app.schema ());
    console.log (app.utterances ());
}