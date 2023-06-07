using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Repuestos_San_jorge.Models
{
    public class PurchaseOrderItem
    {
        [Key]
        public int id { get; set; }

        [Required]
        public int amount { get; set; }

        public float salePrice { get; set; }

        public int purchaseOrderId { get; set; }

        [ForeignKey("purchaseOrderId")]
        public PurchaseOrder? purchaseOrder { get; set; }

        public int productId { get; set; }

        [ForeignKey("productId")]
        public Product? product { get; set; }

        // public PurchaseOrderItem()
        // {
        //     purchaseOrder = new PurchaseOrder();
        //     product = new Product();
        // }
    }
}
