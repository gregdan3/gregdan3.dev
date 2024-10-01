<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>
          <xsl:value-of select="/rss/channel/title|atom:feed/atom:title"/>
        </title>
        <style>
          body {
            font-family: -apple-system, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
            background-color: #1e293b;
            color: #e5e7eb;
            margin-left: auto;
            margin-right: auto;
            max-width: 600px;
          }

          a {
            color: #5599ff;
          }
          a:visited {
            color: #9977dd;
          }

          .entry {
            width: 100%;
            border: 1px solid #9ca3af;
            border-radius: 4px;
            padding: 1em;
            margin-bottom: 1em;
            box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.75), 0 0 2px 1px rgba(0, 0, 0, 0.75);
          }

          .posted {
            text-align: right;
          }

          footer {
            width: 100%;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <header>
          <h1>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="vertical-align: text-bottom; width: 1.2em; height: 1.2em; padding-right: 0.75rem;" class="pr-1" id="RSSicon" viewBox="0 0 256 256">
              <defs>
                <linearGradient x1="0.085" y1="0.085" x2="0.915" y2="0.915" id="RSSg">
                  <stop  offset="0.0" stop-color="#E3702D"/><stop  offset="0.1071" stop-color="#EA7D31"/>
                  <stop  offset="0.3503" stop-color="#F69537"/><stop  offset="0.5" stop-color="#FB9E3A"/>
                  <stop  offset="0.7016" stop-color="#EA7C31"/><stop  offset="0.8866" stop-color="#DE642B"/>
                  <stop  offset="1.0" stop-color="#D95B29"/>
                </linearGradient>
              </defs>
              <rect width="256" height="256" rx="55" ry="55" x="0"  y="0"  fill="#CC5D15"/>
              <rect width="246" height="246" rx="50" ry="50" x="5"  y="5"  fill="#F49C52"/>
              <rect width="236" height="236" rx="47" ry="47" x="10" y="10" fill="url(#RSSg)"/>
              <circle cx="68" cy="189" r="24" fill="#FFF"/>
              <path d="M160 213h-34a82 82 0 0 0 -82 -82v-34a116 116 0 0 1 116 116z" fill="#FFF"/>
              <path d="M184 213A140 140 0 0 0 44 73 V 38a175 175 0 0 1 175 175z" fill="#FFF"/>
            </svg>
            <xsl:text></xsl:text>
            <a>
              <xsl:attribute name="href">
                <xsl:value-of select="/rss/channel/link|/atom:feed/atom:author/atom:uri"/>
              </xsl:attribute>
              <xsl:value-of select="/rss/channel/title|atom:feed/atom:title"/>
            </a>
          </h1>
          <h2><xsl:value-of select="/rss/channel/description|/atom:feed/atom:subtitle"/></h2>
          <p>
            This is an <strong>RSS feed!</strong> 
            You can <strong>subscribe</strong> by copying the URL into a news reader like <strong>Feedbro</strong>. Get it for  
            <strong><a href="https://addons.mozilla.org/en-US/firefox/addon/feedbroreader/" rel="nofollow" target="_blank">Firefox</a></strong> or <strong><a href="https://chromewebstore.google.com/detail/feedbro/mefgmmbdailogpfhfblcnnjfmnpnmdfa" rel="nofollow" target="_blank">Chrome</a></strong> to get started, or <a href="https://aboutfeeds.com" rel="nofollow" target="_blank">read more here.</a>
          </p>
        </header>
        <main>
          <xsl:for-each select="/rss/channel/item|/atom:feed/atom:entry">
            <article class="entry">
              <h3>
                <a>
                  <xsl:attribute name="href">
                    <xsl:value-of select="link|atom:link/@href"/>
                  </xsl:attribute>
                  <xsl:value-of select="title|atom:title"/>
                </a>
              </h3>
              <h4>
                <xsl:value-of select="description|atom:summary"/>
              </h4>
              <p class="posted">Posted at <xsl:value-of select="pubDate|atom:published" />
              </p>
            </article>
          </xsl:for-each>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
