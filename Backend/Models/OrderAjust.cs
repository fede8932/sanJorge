using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Repuestos_San_jorge.Dto.Enums;

namespace Repuestos_San_jorge.Models
{
    public class OrderAjust
    {
        [Key]
        public int id { get; set; }

        [Required]
        public int orderId { get; set; }

        [Required]
        public float subTotal { get; set; }

        [Required]
        [JsonConverter(typeof(JsonStringEnumConverter))]
        public PurchaseOrderStatusType status { get; set; }

        [Required]
        public float iva { get; set; }

        [Required]
        public float total { get; set; }

        [ForeignKey("orderId")]
        public PurchaseOrder purchaseOrder { get; set; }

        public ICollection<AjustOrderItem>? ajustOrderItems { get; set; }

        public OrderAjust()
        {
            status = PurchaseOrderStatusType.Open;
        }
    }
}
