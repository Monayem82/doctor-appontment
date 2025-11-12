

export const chartFiq = <>
    <div className="container mx-auto p-4 md:p-8 bg-base-200 min-h-screen">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-base-content">
            ডাক্তারদের পারফরম্যান্স এনালিসিস
        </h1>

        {/* Grid Container for Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Chart 1: Fee Analysis */}
            <div className="card bg-base-100 shadow-xl border border-primary/10 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="card-body p-6">
                    <h2 className="card-title text-2xl font-semibold mb-4 text-center text-primary">ফি বিশ্লেষণ (ভ্যাট সহ ও ছাড়া)</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={doctorsSummaryShort}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                            <XAxis
                                dataKey="doctorName"
                                angle={-45}
                                textAnchor="end"
                                height={80}
                                interval={0}
                                style={{ fontSize: '12px' }}
                            />
                            <YAxis
                                width={60}
                                tickFormatter={(value) => `৳${value}`}
                                style={{ fontSize: '12px' }}
                            />
                            <Tooltip
                                formatter={(value) => `৳${value}`}
                                labelFormatter={(label) => `ডাক্তার: ${label}`}
                                contentStyle={{ backgroundColor: 'rgba(255,255,255,0.9)', border: '1px solid #ccc', borderRadius: '5px' }}
                                itemStyle={{ color: '#333' }}
                            />
                            <Legend wrapperStyle={{ paddingTop: '20px' }} />
                            <Bar dataKey="withoutTax" fill="#4B0082" name="ফি (ভ্যাট ছাড়া)" barSize={20} /> {/* Indigo color */}
                            <Bar dataKey="totalFee" fill="#8A2BE2" name="মোট ফি (ভ্যাট সহ)" barSize={20} />   {/* BlueViolet color */}
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Chart 2: Rating and Experience Analysis */}
            <div className="card bg-base-100 shadow-xl border border-secondary/10 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="card-body p-6">
                    <h2 className="card-title text-2xl font-semibold mb-4 text-center text-secondary">রেটিং ও অভিজ্ঞতা বিশ্লেষণ</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={doctorsSummaryShort}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                            <XAxis
                                dataKey="doctorName"
                                angle={-45}
                                textAnchor="end"
                                height={80}
                                interval={0}
                                style={{ fontSize: '12px' }}
                            />
                            <YAxis
                                width={60}
                                style={{ fontSize: '12px' }}
                            />
                            <Tooltip
                                labelFormatter={(label) => `ডাক্তার: ${label}`}
                                contentStyle={{ backgroundColor: 'rgba(255,255,255,0.9)', border: '1px solid #ccc', borderRadius: '5px' }}
                                itemStyle={{ color: '#333' }}
                            />
                            <Legend wrapperStyle={{ paddingTop: '20px' }} />
                            <Bar dataKey="rating" fill="#FFD700" name="রেটিং" barSize={20} />       {/* Gold color */}
                            <Bar dataKey="experience" fill="#32CD32" name="অভিজ্ঞতা (বছর)" barSize={20} /> {/* LimeGreen color */}
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </div>
    </div>

</>