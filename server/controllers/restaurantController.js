/**
 * GET /
 * HomePage
 */
exports.homePage = async (req, res) => {
  res.render("index", {
    title: "The Ham Bar and Grille - Home"
  });
};
