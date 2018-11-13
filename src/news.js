
var status = (response) => {
    if (response.status !== 200) {
        return Promise.reject(new Error(response.statusText))
    }
    return Promise.resolve(response)
}
var json = (response) => {
    return response.json()
}

fetch('https://www.skyleap.ru:3050/news')
    .then(status)
    .then(json)
    .then( (data) => {
        var newsblock = document.getElementById('news-content');
        var newsList = document.getElementsByClassName('news-nav-list__item');
        var sourceList = [
                        data[0],
                        data[4].concat(data[5], data[6], data[7], data[8], data[9], data[10], data[11], data[12], data[13]),
                        data[19].concat(data[32], data[43]),
                        data[3].concat(data[17], data[14], data[15], data[41], data[42], data[45]),
                        data[2].concat(data[50], data[44], data[46], data[47], data[56], data[57], data[58]),
                        data[24].concat(data[25], data[26], data[27], data[28], data[29], data[30], data[31]), 
                        data[48].concat(data[49], data[1], data[33], data[34]),
                        data[35].concat(data[36]),
                        data[16].concat(data[18], data[20], data[21], data[22], data[23], data[37], data[38])];

        function mapformer(source) {
            var newsarray = source.map(news => {
                return `<div class="news-block">
                            <a target="_blank" href="${news.link}">
                                <div class="img-block__image" style='background-image: url("${news.image}")'>                            
                                    <div class="news-block__title" >
                                        <h3>
                                            ${news.title}
                                        </h3>
                                    </div>
                                    <div class="logo-block">
                                        <img src="${news.logo}" alt="">
                                    </div>
                                </div>
                            </a>
                        </div>`;
            });
            return newsarray;
        }

        function preprocess(source) {
            newsarray = mapformer(source);
            newsblock.innerHTML = newsarray.slice(0, 9).join('');
    
            return newsarray;
        }

        function render(newsarray) {
            var counter = 0;
            document.getElementById('load-button').onclick = () => {
                counter = counter + 9;
                newsblock.innerHTML = (newsblock.innerHTML).concat(newsarray.slice(counter, counter + 10).join(''));
            }
        }

        newsList[0].style.backgroundColor = "green";

        render(preprocess(data[0]));

        Array.from(newsList).forEach( (section, i) => {
            section.onclick = () =>  {
                render(preprocess(sourceList[i]));
                Array.from(newsList).map( (sec, j) => sec.style.backgroundColor = i === j ? "green" : "#222");
            }
        })

    })
    .catch(function (error) {
        console.log('error', error)
    })