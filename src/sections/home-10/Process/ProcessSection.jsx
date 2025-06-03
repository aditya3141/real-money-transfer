import ProcessWidgetTwo from "@components/Widgets/Process/Two/ProcessWidgetTwo";
import data from "./data";
const ProcessSection = () => {
  return (
    <>
      <div className="home-10_process-section padding-bottom-120 bg-offwhite-2">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xxl-6 col-lg-7 col-md-8 col-sm-9 col-10">
              <div className="home-10_section-heading">
                <h2 className="home-10_section-heading__title">
                  Start writing great in three facile steps
                </h2>
              </div>
            </div>
          </div>
          <div className="row process-widget-2-row">
            {data?.map((items, index) => (
              <ProcessWidgetTwo key={index} {...items} />
            ))}
            {/* {% for item in home10.process %}
                    <div class="col-md-6 col-lg-4 col-8">
                        <div class="process-widget-2">
                            <div class="process-widget-2__count">
                                <span>{{item.count}}</span>
                            </div>
                             <div class="process-widget-2__body">
                                <h3 class="process-widget-2__title">{{item.title}}</h3>
                                <p>{{item.text}}</p>
                             </div>
                        </div>
                    </div>
                {% endfor %} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessSection;
