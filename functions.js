//requirement a
function isArmstrong(n) {
          "use strict";
          var sum = 0;

     if ((n >= 0) && (n <= 99999)) {
            n = String(n);
          for (var i = 0; i < n.length; ++i) {
                sum = sum + Math.pow(n[i], n.length);
          }
          if (sum == n)
                  return true;
                else
                  return false;

           } else {
        return false;
           }
  }



//requirement b
function allArmstrongs() {
    "use strict";
    var sum = 0;
    var n = "";
    var iNumber = 0;
    var retString = "";  

    for (iNumber=1; iNumber<=99999; ++iNumber) {


         sum = 0;   

   n = String(iNumber);

   for (var i = 0; i < n.length; ++i) {

         sum = sum + Math.pow(n[i], n.length);
   }
         if (sum == iNumber) {

     if (retString == "")
       retString = String(iNumber);
     else
       retString = retString + ", " + String(iNumber);
   }
    }
    return retString;
}


//requirement c
function allSubStrings1(s) {
    "use strict";
    var returnString = "";
    var i;
    var iLast;    

    if (s.length > 0) {   

   for (i=0; i<s.length; ++i) {

     for (iLast = i+1; (iLast <= s.length); ++iLast) {

       if (returnString.length > 0) {
         returnString = returnString + ",";    

       }
     returnString = returnString + s.substring(i,iLast);

       }
         }
     }
     return returnString;
}


//requirement d
function allSubStrings2(s) {
    "use strict";
    var retStrings = "";
    var i; 
    var iLast;    
    var retArray = []; 

    if (s.length > 0) {  

   for (i=0; i<s.length; ++i) {

     for (iLast = i+1; (iLast <= s.length); ++iLast) {
     retArray.push (s.substring(i,iLast));
       }
         }
     }

     return retArray;
}


//requirement e
function maxWord (s) {
    "use strict";
    var theLongest = ""; 
    var tWord = "";
    var i = 0;       
    var iLast;     

    while (i < s.length) {

   while (s[i] == " ")
     i++;
   for (iLast = i+1; ((s[iLast] != " ") && (iLast < s.length)); ++iLast);

   tWord = s.substring(i,iLast);

   if (tWord.length > theLongest.length )
     theLongest = tWord;    
   i = iLast;
    }

     return theLongest;
}



