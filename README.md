# Wave
Creates a non-visible wavey matrix

### How to use
To watch the wave work uncomment these lines:
```sh
`162.` `wave.circle();`
`165.` `wave.web();`
`168.` `wave.vertex(2);`
```
(To edit wave configurations go to line `146`)

To see an especific place within the matrix use:
```js
wave.xy(<x>, <y>, true);
```

To apply wave movement in objects create new obj variables:
```js
obj.xWave = wave.xy(obj.x, obj.y, true).x;
obj.yWave = wave.xy(obj.x, obj.y, true).y;
```

### Code
I wrote this code on a ProcessingJS environment at KhanAcademy.
it can be tested [here](https://www.khanacademy.org/computer-programming/wave/4885341697802240).