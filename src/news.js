
var status = (response) => {
    if (response.status !== 200) {
        return Promise.reject(new Error(response.statusText))
    }
    return Promise.resolve(response)
}
var json = function (response) {
    return response.json()
}

fetch('https://www.skyleap.ru:3050/news')
    .then(status)
    .then(json)
    .then(function (data) {
        let newsblock = document.getElementById('news-content');
        let voirblock = document.getElementById('news-nav-list__item1');
        let nskblock = document.getElementById('news-nav-list__item2');
        let itblock = document.getElementById('news-nav-list__item3');
        let techblock = document.getElementById('news-nav-list__item4');
        let bussinesblock = document.getElementById('news-nav-list__item5');
        let vrarblock = document.getElementById('news-nav-list__item6');
        let studyblock = document.getElementById('news-nav-list__item7');
        let academblock = document.getElementById('news-nav-list__item8');
        let blockchainblock = document.getElementById('news-nav-list__item9');

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

        function preprocess(name) {
            switch (name) {
                case "VOIR":
                    var source = data[0];
                    newsarray = mapformer(source);
                    newsblock.innerHTML = newsarray.slice(0, 10).join('');
                break;
                case "NSK":
                    var source = data[4].concat(data[5],data[6],data[7],data[8],data[9],data[10],data[11],data[12],data[13]);
                    newsarray = mapformer(source);
                    newsblock.innerHTML = newsarray.slice(0, 10).join('');
                break;
                case "IT":
                    var source = data[19].concat(data[32],data[43]);
                    newsarray = mapformer(source);
                    newsblock.innerHTML = newsarray.slice(0, 10).join('');
                break;
                case "TECH":
                    var source = data[3].concat(data[17],data[14],data[15],data[41],data[42],data[45]);
                    newsarray = mapformer(source);
                    newsblock.innerHTML = newsarray.slice(0, 10).join('');
                break;
                case "VR":
                    var source = data[24].concat(data[25],data[26],data[27],data[28],data[29],data[30],data[31]);
                    newsarray = mapformer(source);
                    newsblock.innerHTML = newsarray.slice(0, 10).join('');
                break;
                case "BUS":
                    var source = data[2].concat(data[50],data[44],data[46],data[47],data[56],data[57],data[58]);
                    newsarray = mapformer(source);
                    newsblock.innerHTML = newsarray.slice(0, 10).join('');
                break;
                case "STUDY":
                    var source = data[48].concat(data[49],data[1],data[33],data[34]);
                    newsarray = mapformer(source);
                    newsblock.innerHTML = newsarray.slice(0, 10).join('');
                break;
                case "ACADEM":
                    var source = data[35].concat(data[36]);
                    newsarray = mapformer(source);
                    newsblock.innerHTML = newsarray.slice(0, 10).join('');
                break;
                case "BLOCKCHAIN":
                    var source = data[16].concat(data[18],data[20],data[21],data[22],data[23],data[37],data[38]);
                    newsarray = mapformer(source);
                    newsblock.innerHTML = newsarray.slice(0, 10).join('');
                break;
            }
            
            return newsarray;
        }

        function render(newsarray) {
            var counter = 0;
            document.getElementById('load-button').onclick = () => {
                counter = counter + 10;
                newsblock.innerHTML = (newsblock.innerHTML).concat(newsarray.slice(counter, counter + 10).join(''));
            }
        }

        render(preprocess("VOIR"));

        voirblock.onclick = () => {
            render(preprocess("VOIR"));
        }

        nskblock.onclick = () => {
            render(preprocess("NSK"));
        }

        itblock.onclick = () => {
            render(preprocess("IT"));
        }

        techblock.onclick = () => {
            render(preprocess("TECH"));
        }
        
        bussinesblock.onclick = () => {
            render(preprocess("BUS"));
        }

        vrarblock.onclick = () => {
            render(preprocess("VR"));
        }

        studyblock.onclick = () => {
            render(preprocess("STUDY"));
        }

        academblock.onclick = () => {
            render(preprocess("ACADEM"));
        }

        blockchainblock.onclick = () => {
            render(preprocess("BLOCKCHAIN"));
        }

        return preprocess("VOIR");
    })
    .catch(function (error) {
        console.log('error', error)
    })     