export const patterns = [
    {
        name: "Date in format dd/mm/yyyy",
        regex: /^([1-9]|0[1-9]|[12][0-9]|3[01])\D([1-9]|0[1-9]|1[012])\D(19[0-9][0-9]|20[0-9][0-9])$/,
        description: "Will match dates with slashes or with spaces dd/mm/yyyy dd mm yyyy",
        tags: "date time"
    },
    {
        name: "Time in 24-hour format",
        regex: /([01]?[0-9]|2[0-3]):[0-5][0-9]/,
        description: "Match times in 24 hour format",
        tags: "date time"
    },
    {
        name: "HTML tags",
        regex: /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/,
        description: "Match opening and closing HTML tags with content between",
        tags: "markup,xml,html"
    },
    {
        name: "Username",
        regex: /^[a-z0-9_-]{3,16}$/,
        description: "A string between 3 and 16 characters, allowing alphanumeric characters and hyphens and underscores",
        tags: "username,validation"
    },
    {
        name: "Password",
        regex: /^[a-z0-9+_-]{6,18}$/,
        description: "A string between 6 and 18 characters, allowing alphanumeric characters and hypehns and underscores",
        tags: "password,validation"
    },
    {
        name: "Hex Value",
        regex: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
        description: "Base 16 numbers, such as RGB values",
        tags: "hex,color"
    },
    {
        name: "URL Slug",
        regex: /^[a-z0-9-]+$/,
        description: "Match valid URL slugs",
        tags: "URL"
    },
    {
        name: "Email",
        regex: /^([a-z0-9+_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,24})$/,
        description: "Match standards complient email addresses",
        tags: "email,validation"
    },
    {
        name: "SRC of image tag",
        regex: /\< *[img][^\>]*[src] *= *[\"\']{0,1}([^\"\'\ >]*)/,
        description: "Match the src attribute of an HTML image tag",
        tags: "html,tag,image"
    },
    {
        name: "URL",
        regex: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
        description: "Match URL with optional protocal",
        tags: "url,address,http"
    },
    {
        name: "IPv4 Address",
        regex: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
        description: "Match IP v4 addresses",
        tags: "tcpip,internet,address"
    },
    {
        name: "IPv6 Address",
        regex: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
        description: "Match IP v6 addresses",
        tags: "tcpip,internet,address"
    },
    {
        name: "Positive Integer",
        regex: /^\d+$/,
        descriptions: "Match whole numbers above zero",
        tags: "number"
    },
    {
        name: "Negative Integer",
        regex: /^-\d+$/,
        description: "Match whole numbers below zero",
        tags: "number"
    },
    {
        name: "Integer",
        regex: /^-?\d+$/,
        description: "Match whole numbers, above or below zero",
        tags: "number"
    },
    {
        name: "Positive number",
        regex: /^\d*\.?\d+$/,
        description: "Match integers or floats that are positive",
        tags: "float"
    },
    {
        name: "Negative number",
        regex: /^-\d*\.?\d+$/,
        description: "Match integers or floats that are negative",
        tags: "float"
    },
    {
        name: "Positive or negative number",
        regex: /^-?\d*\.?\d+$/,
        description: "Match integers or floats that are positive or negative",
        tags: "float"
    },
    {
        name: "Phone number",
        regex: /^\+?[\d\s]{3,}$/,
        description: "Match phone numbers at least 3 digits long",
        tags: "validation"
    },
    {
        name: "New line",
        regex: /[\r\n]|$/,
        description: "Match new lines within text",
        tags: "text"
    },
    {
        name: "ID of Youtube video",
        regex: /https?:\/\/(?:youtu\.be\/|(?:[a-z]{2,3}\.)?youtube\.com\/watch(?:\?|#\!)v=)([\w-]{11}).*/gi,
        description: "Match the ID of a youtube video URL",
        tags: "video,youtube,url"
    },
    {
        name: "CSS comment",
        regex: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//,
        description: "Match standard CSS comments",
        tags: "css,comment,code"
    }
    /*,
     {
     name:"Word exception",
     regex:/\bTarzan\b|\bJane\b|\bSuperman\b|(\w+)/,
     description:"Match all words apart from the ones listed",
     tags:"words,sentence,blacklist"
     }*/
];
