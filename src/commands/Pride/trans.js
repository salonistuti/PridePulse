const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const chalk = require("chalk");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("transgender")
    .setDescription("Trans-formers roll out!!"),

  async execute(interaction, client) {
    const estDate = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
    });
    console.log(
      chalk.white.bold(
        `-------------------------- \n/trans \nServer: ${interaction.guild.name} (${interaction.guild.id}) \nUser: ${interaction.user.tag} (${interaction.user.id}) \nTime: ${estDate} (EST) \n--------------------------`
      )
    );
    const embed = new EmbedBuilder()
      .setTitle(`Transgender!`)
      .setDescription(`Here are some facts on "transgender"`)
      .setColor(0xff00ae)
      .setFields(
        {
          name: `What is transgender`,
          value: `Transgender individuals are those whose gender identity does not align with the sex they were assigned at birth. This encompasses a broad spectrum of identities and experiences, including those who may not identify strictly as male or female. More information can be found in </gender:1112200593310756874>`,
        },
        {
          name: `History`,
          value: `Transgender people have been part of every culture and society throughout history. The term "transgender" itself emerged in the mid-20th century, but diverse gender expressions have existed globally for centuries. From the Hijras of India to the Two-Spirit individuals in Indigenous North American cultures, transgender and non-binary identities have always been a part of human history. Modern transgender activism began gaining momentum in the mid-20th century, with pivotal events like the Stonewall Riots of 1969 playing a significant role in the fight for transgender rights.`,
        },
        {
          name: `<:Pridebot_flag_tg:1112201010509795348> The Flag`,
          value: `The transgender pride flag, crafted by transgender activist Monica Helms in 1999, is a powerful symbol of the community's diversity and resilience. First unveiled at a pride parade in Phoenix in 2000, it has since become an emblem of transgender visibility and pride worldwide. The flag features five horizontal stripes: two light blue representing the traditional color for boys, two pink symbolizing girls, and a white stripe in the center for those who are intersex, transitioning, or identify outside the traditional gender binary. This flag has flown in significant places, including the Castro District and the White House, especially during moments of remembrance and pride celebrations.`,
        },
        {
          name: `Days/Honoring Times`,
          value: `- Transgender History Month - **August** \n- Trans Awareness Month - **November** \n- Trans Awareness Week - **November 13th to 19th** \n- Trans Day of Visibility - **March 31st** \n- Trans Flag Day - **August 19th** \n- Transgender Day of Remembrance - **November 20th**`,
        }
      );
    await interaction.reply({ embeds: [embed] });
  },
};
