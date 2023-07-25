using System.ComponentModel.DataAnnotations;

namespace Repuestos_San_jorge.Models
{
    public class Product
    {
        [Key]
        public int id { get; set; }

        [Required]
        public string article { get; set; }

        [Required]
        [StringLength(300)]
        public string description { get; set; }

        [Required]
        public float listPrice { get; set; }

        [Required]
        public float costPercentage { get; set; }

        [Required]
        public float salePercentage { get; set; }

        public ICollection<PurchaseOrderItem>? purchaseOrderItems { get; set; }

        public virtual ICollection<BrandProduct>? brandProducts { get; set; }

        // public Stock? stock { get; set; }
    }
}
