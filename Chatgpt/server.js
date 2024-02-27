const express = require('express');
const { spawn } = require('child_process');

const app = express();
app.use(express.json());

app.post('/stream', (req, res) => {
  const { command } = req.body;

  const ffmpeg = spawn('sh', ['-c', command]);
  ffmpeg.stdout.on('data', data => {
    console.log(`FFmpeg stdout: ${data}`);
  });
  ffmpeg.stderr.on('data', data => {
    console.error(`FFmpeg stderr: ${data}`);
  });
  ffmpeg.on('close', code => {
    console.log(`FFmpeg process exited with code ${code}`);
  });

  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
