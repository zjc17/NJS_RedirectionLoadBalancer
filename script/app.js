function simple(req) {
    var links = ['https://www.baidu.com/1', 
                'https://www.baidu.com/2',
                'https://www.baidu.com/3',
                'https://www.baidu.com/4',
                'https://www.baidu.com/5',
            ];
    var link = links[Math.floor(Math.random()*links.length)];
    req.return(301, link);
}

export default { simple };

