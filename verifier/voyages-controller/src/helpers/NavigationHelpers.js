/**
 * @description 
 * Forwards to issuer page. 
 */
export function returnIssuer(){
    console.log("Back to issuer"); 
    window.open("http://localhost:4200/issuer/credentials", "_self");
}