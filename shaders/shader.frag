#version 330 core
out vec4 FragColor;

in vec3 ourColor;
in vec2 TexCoord;

uniform sampler2D texture1; // fundo
uniform sampler2D texture2; // camada com transparência

void main()
{
    vec4 bg = texture(texture1, TexCoord); // cor de fundo
    vec4 fg = texture(texture2, -TexCoord); // camada com alfa

    // sobrepor camada superior com alfa
    FragColor = fg.a * fg + (1.0 - fg.a) * bg;
}