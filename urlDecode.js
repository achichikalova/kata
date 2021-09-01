const urlDecode = function(text) {
  return JSON.parse('{"' + decodeURI(text
                                        .replace(/&/g, "\",\"")
                                        .replace(/=/g,"\":\"")) 
                    + '"}');
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);