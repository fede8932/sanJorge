namespace Repuestos_San_jorge.Dto.Admin
{
    public class UpdateProductDto
    {
        public string? article { get; set; }
        public string? description { get; set; }
        public float? listPrice { get; set; }
        public float? costPercentage { get; set; }
        public float? salePercentage { get; set; }
    }
    
}