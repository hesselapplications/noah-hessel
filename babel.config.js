module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
        "prismjs",
        {
            "languages": [
                "javascript",
                "css",
                "markup"
            ],
            "plugins": [
                "inline-color",
                "match-braces"
            ],
            "theme": "default",
            "css": true
        }
    ]
]
}
