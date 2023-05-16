using Microsoft.EntityFrameworkCore;
using Repuestos_San_jorge.Models;
using Repuestos_San_jorge.Data;
using Repuestos_San_jorge.Dto.Admin;

namespace Repuestos_San_jorge.Services.Admin
{
    public class ScheduleService : IScheduleService
    {
        private readonly OfficeDb _dbContext;

        public ScheduleService(OfficeDb dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<string> CreateScheduleAsync(Schedule schedule) // crear horario
        {
            try
            {
                var client = await _dbContext.Clients.FirstOrDefaultAsync(
                    client => client.id == schedule.clientId
                );
                if (client == null)
                {
                    throw new ArgumentNullException(nameof(client), "El cliente no puede ser null");
                }
                schedule.client = client;
                _dbContext.Schedules.Add(schedule);
                await _dbContext.SaveChangesAsync();
                return "Registrado";
            }
            catch
            {
                throw;
            }
        }

        public async Task<string> UpdateScheduleAsync(int id, UpdateScheduleDto data) // editar horarios
        {
            try
            {
                var schedule = await _dbContext.Schedules.SingleOrDefaultAsync(
                    schedule => schedule.id == id
                );
                if (schedule == null)
                {
                    throw new ArgumentNullException(
                        nameof(schedule),
                        "El horario no puede ser null"
                    );
                }
                var dataUpdate = new Dictionary<string, object>();
                foreach (var propiedad in data.GetType().GetProperties())
                {
                    string nombrePropiedad = propiedad.Name;
                    var valorPropiedad = propiedad.GetValue(data);
                    if (valorPropiedad != null)
                    {
                        dataUpdate.Add(nombrePropiedad, valorPropiedad);
                    }
                }
                _dbContext.Entry(schedule).CurrentValues.SetValues(dataUpdate);
                await _dbContext.SaveChangesAsync();
                return "Horario actualizado";
            }
            catch
            {
                throw;
            }
        }
    }

    public interface IScheduleService
    {
        Task<string> CreateScheduleAsync(Schedule schedule);
        Task<string> UpdateScheduleAsync(int id, UpdateScheduleDto data);
    }
}
