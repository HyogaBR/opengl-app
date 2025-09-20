#version 330 core
out vec4 FragColor;
uniform float u_time;
void main()
{
    float theta = u_time;
    float r = 0.5 + 0.5 * cos(theta);
    float g = 0.5 + 0.5 * cos(theta - 2.0944);
    float b = 0.5 + 0.5 * cos(theta - 4.1888);
    float sum = r + g + b;
    r /= sum;
    g /= sum;
    b /= sum;
    FragColor = vec4(r, g, b, 1.0);
}