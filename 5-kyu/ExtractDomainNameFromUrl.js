/**
 * Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
 */

function domainName(url){

// string, devided by www. or // 
  // string
  
// separted by dots just he the second one
  

  
  if ( url.includes('www')) {
    return url.split('.')[1]
    
  }
  
   if ( !url.includes('http')) {
    return url.split('.')[0]
    
  }
  return url.split('.')[0].split('//')[1]
}