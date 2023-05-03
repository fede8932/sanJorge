using System.ComponentModel.DataAnnotations;

namespace Repuestos_San_jorge.Models
{
    public class CurrentAcount
    {
        public int id { get; set; }
        public int movementId { get; set; }

        public Client client { get; set; }

        public Movement movement { get; set; }

        public CurrentAcount()
        {
            client = new Client();
            movement = new Movement();
        }
    }
}
