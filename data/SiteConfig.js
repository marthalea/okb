module.exports = {
  blogPostDir: "programs", // The name of directory that contains your posts.
  siteTitle: "Oregon Knowledge Bank", // Site title.
  siteTitleAlt: "OKB Public Safety Resources", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://okb.netlify.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Oregon criminal justice resources", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "", // Tracking code ID for google analytics.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Policing", // Default category for posts.
  userName: "Criminal Justice Commission", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Salem, Oregon", // User location to display in the author segment.
  userAvatar: "", // User avatar to display in the author segment.
  userDescription:
    "About the OKB here?", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    // {
    //   label: "GitHub",
    //   url: "https://github.com/alexpichel/okb",
    //   iconClassName: "fa fa-github"
    // },
    {
      label: "Twitter",
      url: "https://twitter.com/ORKnowledgeBank",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:okb@oregon.gov",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2017. Oregon Criminal Justice Commission" // Copyright string for the footer of the website and RSS feed.
};
