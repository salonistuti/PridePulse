const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const chalk = require("chalk");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lesbian")
    .setDescription("woman or 𝘸𝘰𝘮𝘢𝘯"),

  async execute(interaction, client) {
    const estDate = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
    });
    console.log(
      chalk.white.bold(
        `-------------------------- \n/lesbian \nServer: ${interaction.guild.name} (${interaction.guild.id}) \nUser: ${interaction.user.tag} (${interaction.user.id}) \nTime: ${estDate} (EST) \n--------------------------`
      )
    );
    const embed = new EmbedBuilder()
      .setTitle(`Lesbian!`)
      .setDescription(`Here are some facts on "lesbians"`)
      .setColor(0xff00ae)
      .setFields(
        {
          name: `What is Lesbian`,
          value: `Lesbian is a term used to describe women who are romantically and/or sexually attracted to other women. This identity acknowledges the diverse experiences of women who love women, embracing a range of relationships and identities.`,
        },
        {
          name: `History`,
          value: `The term "lesbian" originates from the Greek island of Lesbos, home to the poet Sappho, who expressed affection for women in her works. Over time, "lesbian" evolved to specifically describe women attracted to women. It's a significant part of LGBTQ+ history and culture, reflecting the journey and struggles of women who love women.`,
        },
        {
          name: `<:_:1108868440363642930> The Flag`,
          value: `The first documented lesbian pride flag was designed by graphic designer Sean Campbell in 1999 and published in a 2000s issue of the Palm Springs Gay and Lesbian Times, the "Labrys Lesbian Flag" <:_:1115866300858761236>. The "Lipstick Lesbian Flag" <:_:1115867721737977877> was the first design of the now more modern flag in 2010 and later had "Pink Flag" <:_:1115867480649379840> in 2015. These flags adopted horizontal stripes harkening to the Rainbow Pride Flag designed by Gilbert Baker but in a gradient of pink and white. Finally, in 2018 a woman on Tumblr named Emily Gwen posted her idea for the lesbian flag called "Sunset Lesbian Flag" <:_:1115868994746974320> which has 7 stripes and was later simplified to 5 aka now " Lesbian Pride Flag" <:_:1108868440363642930>. ([Source](https://flagsforgood.com/blogs/news/history-of-the-lesbian-flag))`,
        },
        {
          name: `Days/Honoring Times`,
          value: `- Lesbian Visibility Week - **April 24th to 30th** \n- Masculine Lesbian Visibility and Awareness Week - **August 1st to 7th** \n- Lesbian Visibility Day - **April 26** \n- Masculine Lesbian Visibility and Awareness Day - **August 4th** \n- International Lesbian Day - **October 8**`,
        }
      );
    await interaction.reply({ embeds: [embed] });
  },
};
