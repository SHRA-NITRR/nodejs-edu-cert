const url=require('url');

const adr= 'https://ecorp.edureka.co/talentica/classroom/recording/1905/16600/1535427?tab=CourseContent';

const address=url.parse(adr, true);
console.log(address);