using System.ComponentModel.DataAnnotations;

namespace Repuestos_San_jorge.Models
{
    public class PurchaseOrderItem
    {
        public int id { get; set; }

        [Required]
        public int amount { get; set; }

        public float salePrice { get; set; }

        public int purchaseOrderId { get; set; }
        public PurchaseOrder purchaseOrder { get; set; }

        public int productId { get; set; }
        public Product product { get; set; }

        public PurchaseOrderItem()
        {
            purchaseOrder = new PurchaseOrder();
            product = new Product();
        }
    }
}
