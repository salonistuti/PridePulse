const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const chalk = require("chalk");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lgbtq")
    .setDescription(
      "Are you a member of lettuce, guac, bacon, tomato, queso people?"
    ),

  async execute(interaction, client) {
    const estDate = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
    });
    console.log(
      chalk.white.bold(
        `-------------------------- \n/lgbtq \nServer: ${interaction.guild.name} (${interaction.guild.id}) \nUser: ${interaction.user.tag} (${interaction.user.id}) \nTime: ${estDate} (EST) \n--------------------------`
      )
    );
    const embed = new EmbedBuilder()
      .setTitle(`OMG IT IS THE`)
      .setDescription(
        `**L** </lesbian:1183468824478089247> \n**G** </gay:1183468824478089246> \n**B** </bisexual:1183503172036206632> \n**T** </transgender:1183503172036206636> \n**Q** </queer:1196149039431962644> \n :)`
      )
      .setColor(0xff00ae);
    await interaction.reply({ embeds: [embed] });
  },
};
