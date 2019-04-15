import React from 'react';

const context = React.createContext('english'); // Default value = 'english'
console.log(`LanguageContext: \n`, context); 
export default context;