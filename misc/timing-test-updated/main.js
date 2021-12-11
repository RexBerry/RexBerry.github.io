count = 0;
MAX_CLICKS = 33;

clickTimes = [];

function clickMe() {

    if (count === MAX_CLICKS) {

        if (confirm("Start another trial?")) {
            count = 0;
            document.getElementById('count').innerHTML = '';
        }

        return;

    }

    if (count === 0) {
        clickTimes = [];
    }
    
    clickTimes.push(performance.now());

    count++;
    document.getElementById('count').innerHTML = `${count}/${MAX_CLICKS}`;

    if (count === MAX_CLICKS) {

        let deltaTime = [];
        for (let i = 1; i < clickTimes.length; i++) {
            deltaTime.push(+((clickTimes[i] - clickTimes[i - 1]).toFixed(3)));
        }

        let mean = 0;
        for (let i = 0; i < deltaTime.length; i++) {
            mean += deltaTime[i];
        }
        mean /= deltaTime.length;

        let stddev = 0;
        for (let i = 0; i < deltaTime.length; i++) {
            stddev += (deltaTime[i] - mean) * (deltaTime[i] - mean);
        }
        stddev = Math.sqrt(stddev / (deltaTime.length - 1));

        document.getElementById('count').innerHTML = "Click again to reset";
        document.getElementById('meanSpan').innerHTML = `Mean Time Between Clicks: ${(mean / 1000).toFixed(4)} sec`;
        document.getElementById('stddevSpan').innerHTML = `Standard Deviation: ${(stddev / 1000).toFixed(4)} sec (${(100 * stddev / mean).toFixed(1)}% of mean)`;

        let timeDisplay = '';
        for (let t of deltaTime) {
            timeDisplay += `${(t / 1000).toFixed(4)}<br>`;
        }

        document.getElementById('clickTimes').innerHTML = timeDisplay;

    }


}
